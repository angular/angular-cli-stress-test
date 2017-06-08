/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1614Component } from './comp-1614.component';

describe('Comp1614Component', () => {
  let component: Comp1614Component;
  let fixture: ComponentFixture<Comp1614Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1614Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1614Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
