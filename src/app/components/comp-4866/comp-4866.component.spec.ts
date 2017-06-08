/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4866Component } from './comp-4866.component';

describe('Comp4866Component', () => {
  let component: Comp4866Component;
  let fixture: ComponentFixture<Comp4866Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4866Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4866Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
