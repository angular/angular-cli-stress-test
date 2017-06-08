/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3053Component } from './comp-3053.component';

describe('Comp3053Component', () => {
  let component: Comp3053Component;
  let fixture: ComponentFixture<Comp3053Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3053Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3053Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
