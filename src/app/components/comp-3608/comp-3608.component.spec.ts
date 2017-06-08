/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3608Component } from './comp-3608.component';

describe('Comp3608Component', () => {
  let component: Comp3608Component;
  let fixture: ComponentFixture<Comp3608Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3608Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3608Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
