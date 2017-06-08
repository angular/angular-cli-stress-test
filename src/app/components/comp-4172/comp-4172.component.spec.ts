/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4172Component } from './comp-4172.component';

describe('Comp4172Component', () => {
  let component: Comp4172Component;
  let fixture: ComponentFixture<Comp4172Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4172Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
