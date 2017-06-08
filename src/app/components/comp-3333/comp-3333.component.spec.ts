/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3333Component } from './comp-3333.component';

describe('Comp3333Component', () => {
  let component: Comp3333Component;
  let fixture: ComponentFixture<Comp3333Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3333Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
