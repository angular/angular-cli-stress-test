/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3376Component } from './comp-3376.component';

describe('Comp3376Component', () => {
  let component: Comp3376Component;
  let fixture: ComponentFixture<Comp3376Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3376Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3376Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
