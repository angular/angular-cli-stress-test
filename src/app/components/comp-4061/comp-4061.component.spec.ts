/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4061Component } from './comp-4061.component';

describe('Comp4061Component', () => {
  let component: Comp4061Component;
  let fixture: ComponentFixture<Comp4061Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4061Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4061Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
