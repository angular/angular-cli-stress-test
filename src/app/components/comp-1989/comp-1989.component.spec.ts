/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1989Component } from './comp-1989.component';

describe('Comp1989Component', () => {
  let component: Comp1989Component;
  let fixture: ComponentFixture<Comp1989Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1989Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1989Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
