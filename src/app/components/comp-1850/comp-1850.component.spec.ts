/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1850Component } from './comp-1850.component';

describe('Comp1850Component', () => {
  let component: Comp1850Component;
  let fixture: ComponentFixture<Comp1850Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1850Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1850Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
