/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1342Component } from './comp-1342.component';

describe('Comp1342Component', () => {
  let component: Comp1342Component;
  let fixture: ComponentFixture<Comp1342Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1342Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
