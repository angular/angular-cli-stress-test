/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1260Component } from './comp-1260.component';

describe('Comp1260Component', () => {
  let component: Comp1260Component;
  let fixture: ComponentFixture<Comp1260Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1260Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
