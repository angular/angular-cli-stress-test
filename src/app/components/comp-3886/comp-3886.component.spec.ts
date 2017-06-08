/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3886Component } from './comp-3886.component';

describe('Comp3886Component', () => {
  let component: Comp3886Component;
  let fixture: ComponentFixture<Comp3886Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3886Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3886Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
