/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2826Component } from './comp-2826.component';

describe('Comp2826Component', () => {
  let component: Comp2826Component;
  let fixture: ComponentFixture<Comp2826Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2826Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2826Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
