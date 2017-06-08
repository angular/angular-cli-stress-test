/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1877Component } from './comp-1877.component';

describe('Comp1877Component', () => {
  let component: Comp1877Component;
  let fixture: ComponentFixture<Comp1877Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1877Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1877Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
