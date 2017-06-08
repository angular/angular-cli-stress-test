/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service379Service } from './service-379.service';

describe('Service379Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service379Service]
    });
  });

  it('should ...', inject([Service379Service], (service: Service379Service) => {
    expect(service).toBeTruthy();
  }));
});
