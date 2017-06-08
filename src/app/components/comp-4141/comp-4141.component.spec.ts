/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4141Component } from './comp-4141.component';

describe('Comp4141Component', () => {
  let component: Comp4141Component;
  let fixture: ComponentFixture<Comp4141Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4141Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
