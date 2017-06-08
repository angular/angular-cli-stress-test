/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3553Component } from './comp-3553.component';

describe('Comp3553Component', () => {
  let component: Comp3553Component;
  let fixture: ComponentFixture<Comp3553Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3553Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3553Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
