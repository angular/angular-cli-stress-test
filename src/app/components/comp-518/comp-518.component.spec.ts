/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp518Component } from './comp-518.component';

describe('Comp518Component', () => {
  let component: Comp518Component;
  let fixture: ComponentFixture<Comp518Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp518Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp518Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
