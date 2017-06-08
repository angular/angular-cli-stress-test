/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp694Component } from './comp-694.component';

describe('Comp694Component', () => {
  let component: Comp694Component;
  let fixture: ComponentFixture<Comp694Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp694Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp694Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
