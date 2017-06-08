/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3628Component } from './comp-3628.component';

describe('Comp3628Component', () => {
  let component: Comp3628Component;
  let fixture: ComponentFixture<Comp3628Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3628Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3628Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
