/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3664Component } from './comp-3664.component';

describe('Comp3664Component', () => {
  let component: Comp3664Component;
  let fixture: ComponentFixture<Comp3664Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3664Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3664Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
