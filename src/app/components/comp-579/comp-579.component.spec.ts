/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp579Component } from './comp-579.component';

describe('Comp579Component', () => {
  let component: Comp579Component;
  let fixture: ComponentFixture<Comp579Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp579Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp579Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
