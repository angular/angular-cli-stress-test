/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1142Component } from './comp-1142.component';

describe('Comp1142Component', () => {
  let component: Comp1142Component;
  let fixture: ComponentFixture<Comp1142Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1142Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
