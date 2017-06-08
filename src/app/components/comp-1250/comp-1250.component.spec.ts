/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1250Component } from './comp-1250.component';

describe('Comp1250Component', () => {
  let component: Comp1250Component;
  let fixture: ComponentFixture<Comp1250Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1250Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
