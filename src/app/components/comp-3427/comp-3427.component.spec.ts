/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3427Component } from './comp-3427.component';

describe('Comp3427Component', () => {
  let component: Comp3427Component;
  let fixture: ComponentFixture<Comp3427Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3427Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3427Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
