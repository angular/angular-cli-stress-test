/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3069Component } from './comp-3069.component';

describe('Comp3069Component', () => {
  let component: Comp3069Component;
  let fixture: ComponentFixture<Comp3069Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3069Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3069Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
