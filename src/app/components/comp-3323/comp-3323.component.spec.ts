/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3323Component } from './comp-3323.component';

describe('Comp3323Component', () => {
  let component: Comp3323Component;
  let fixture: ComponentFixture<Comp3323Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3323Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
