/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1134Component } from './comp-1134.component';

describe('Comp1134Component', () => {
  let component: Comp1134Component;
  let fixture: ComponentFixture<Comp1134Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1134Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
