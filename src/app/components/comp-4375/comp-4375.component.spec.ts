/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4375Component } from './comp-4375.component';

describe('Comp4375Component', () => {
  let component: Comp4375Component;
  let fixture: ComponentFixture<Comp4375Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4375Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4375Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
