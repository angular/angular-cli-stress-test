/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2850Component } from './comp-2850.component';

describe('Comp2850Component', () => {
  let component: Comp2850Component;
  let fixture: ComponentFixture<Comp2850Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2850Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2850Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
