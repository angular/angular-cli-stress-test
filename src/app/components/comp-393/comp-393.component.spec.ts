/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp393Component } from './comp-393.component';

describe('Comp393Component', () => {
  let component: Comp393Component;
  let fixture: ComponentFixture<Comp393Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp393Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp393Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
