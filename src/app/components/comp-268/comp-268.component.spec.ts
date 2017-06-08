/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp268Component } from './comp-268.component';

describe('Comp268Component', () => {
  let component: Comp268Component;
  let fixture: ComponentFixture<Comp268Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp268Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
