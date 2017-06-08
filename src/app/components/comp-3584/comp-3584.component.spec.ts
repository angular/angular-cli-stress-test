/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3584Component } from './comp-3584.component';

describe('Comp3584Component', () => {
  let component: Comp3584Component;
  let fixture: ComponentFixture<Comp3584Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3584Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3584Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
