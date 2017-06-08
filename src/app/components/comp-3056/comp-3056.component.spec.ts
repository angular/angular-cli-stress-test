/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3056Component } from './comp-3056.component';

describe('Comp3056Component', () => {
  let component: Comp3056Component;
  let fixture: ComponentFixture<Comp3056Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3056Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3056Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
