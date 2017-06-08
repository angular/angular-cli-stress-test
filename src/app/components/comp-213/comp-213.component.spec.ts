/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp213Component } from './comp-213.component';

describe('Comp213Component', () => {
  let component: Comp213Component;
  let fixture: ComponentFixture<Comp213Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp213Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
