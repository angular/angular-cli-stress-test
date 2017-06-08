/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1531Component } from './comp-1531.component';

describe('Comp1531Component', () => {
  let component: Comp1531Component;
  let fixture: ComponentFixture<Comp1531Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1531Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1531Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
