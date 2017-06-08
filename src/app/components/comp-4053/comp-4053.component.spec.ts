/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4053Component } from './comp-4053.component';

describe('Comp4053Component', () => {
  let component: Comp4053Component;
  let fixture: ComponentFixture<Comp4053Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4053Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4053Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
