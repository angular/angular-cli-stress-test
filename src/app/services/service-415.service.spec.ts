/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service415Service } from './service-415.service';

describe('Service415Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service415Service]
    });
  });

  it('should ...', inject([Service415Service], (service: Service415Service) => {
    expect(service).toBeTruthy();
  }));
});
