/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp626Component } from './comp-626.component';

describe('Comp626Component', () => {
  let component: Comp626Component;
  let fixture: ComponentFixture<Comp626Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp626Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp626Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
