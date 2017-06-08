/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp190Component } from './comp-190.component';

describe('Comp190Component', () => {
  let component: Comp190Component;
  let fixture: ComponentFixture<Comp190Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp190Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
