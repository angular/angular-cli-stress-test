/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3189Component } from './comp-3189.component';

describe('Comp3189Component', () => {
  let component: Comp3189Component;
  let fixture: ComponentFixture<Comp3189Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3189Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
