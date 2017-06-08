/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4548Component } from './comp-4548.component';

describe('Comp4548Component', () => {
  let component: Comp4548Component;
  let fixture: ComponentFixture<Comp4548Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4548Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4548Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
