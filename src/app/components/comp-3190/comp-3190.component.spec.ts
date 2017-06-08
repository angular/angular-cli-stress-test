/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3190Component } from './comp-3190.component';

describe('Comp3190Component', () => {
  let component: Comp3190Component;
  let fixture: ComponentFixture<Comp3190Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3190Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
