/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp162Component } from './comp-162.component';

describe('Comp162Component', () => {
  let component: Comp162Component;
  let fixture: ComponentFixture<Comp162Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp162Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
