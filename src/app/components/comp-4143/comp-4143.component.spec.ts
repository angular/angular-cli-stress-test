/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4143Component } from './comp-4143.component';

describe('Comp4143Component', () => {
  let component: Comp4143Component;
  let fixture: ComponentFixture<Comp4143Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4143Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
