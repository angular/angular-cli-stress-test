/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2845Component } from './comp-2845.component';

describe('Comp2845Component', () => {
  let component: Comp2845Component;
  let fixture: ComponentFixture<Comp2845Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2845Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2845Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
