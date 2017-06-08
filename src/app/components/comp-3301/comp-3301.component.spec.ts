/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3301Component } from './comp-3301.component';

describe('Comp3301Component', () => {
  let component: Comp3301Component;
  let fixture: ComponentFixture<Comp3301Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3301Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
