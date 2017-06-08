/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service344Service } from './service-344.service';

describe('Service344Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service344Service]
    });
  });

  it('should ...', inject([Service344Service], (service: Service344Service) => {
    expect(service).toBeTruthy();
  }));
});
