/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4987Component } from './comp-4987.component';

describe('Comp4987Component', () => {
  let component: Comp4987Component;
  let fixture: ComponentFixture<Comp4987Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4987Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4987Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
