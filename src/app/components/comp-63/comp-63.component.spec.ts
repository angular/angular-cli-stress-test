/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp63Component } from './comp-63.component';

describe('Comp63Component', () => {
  let component: Comp63Component;
  let fixture: ComponentFixture<Comp63Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp63Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
