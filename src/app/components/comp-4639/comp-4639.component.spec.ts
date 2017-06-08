/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4639Component } from './comp-4639.component';

describe('Comp4639Component', () => {
  let component: Comp4639Component;
  let fixture: ComponentFixture<Comp4639Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4639Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4639Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
