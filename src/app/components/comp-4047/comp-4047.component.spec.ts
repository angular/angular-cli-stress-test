/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4047Component } from './comp-4047.component';

describe('Comp4047Component', () => {
  let component: Comp4047Component;
  let fixture: ComponentFixture<Comp4047Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4047Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4047Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
