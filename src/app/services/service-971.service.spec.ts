/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service971Service } from './service-971.service';

describe('Service971Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service971Service]
    });
  });

  it('should ...', inject([Service971Service], (service: Service971Service) => {
    expect(service).toBeTruthy();
  }));
});
